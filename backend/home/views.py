from django.http import JsonResponse
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.contrib.auth import logout
from home.models import *
from django.contrib.auth import login
@csrf_exempt
def register(request):
    if request.method!='POST':
        return JsonResponse({"error":"ONLY POST METHOD ALLOWED"},status=405)
    try:
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        pwd=data.get('pwd')

        if not email :
            return JsonResponse({"message":"EMAIL IS REQUIRED"})
        if not name :
            return JsonResponse({"message":"NAME IS REQUIRED"})
        if not pwd:
            return JsonResponse({"message":"PASSWORD IS REQUIRED"})
        user=User.objects.create_user(username=email,password=pwd,first_name=name)
        user.save()

        return JsonResponse({"message": "Data received"})
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@csrf_exempt
def logins(request):
    print("login clicked")
    if request.method!='POST':
        return JsonResponse({"message":'ONLY POST REQUESTS ALLOWED'})
    try:
        data=json.loads(request.body)
        print(data)
        email=data.get('email')
        pwd=data.get('pwd')
        
        user=authenticate(username=email , password=pwd)
        if user is not None:
            print("hello")
            login(request,user)
            return JsonResponse({"message":"LOGIN SUCCESSFUL"},status=200)
        else :
            logout(request)
            return JsonResponse({"error":"Login Denied"},status=404)
    except:
        return JsonResponse({"MESSAGE":"ERROR OCCURED"})

def productView(request):
    category=request.GET.get("category")
    subcategory=request.GET.get("subcategory")
    print(category)
    print(subcategory)
    if request.method=='GET':
        products=Product.objects.all()
        if category:
            products=products.filter(Poductype__iexact=category)
        if subcategory:
            products=products.filter(SubCtgry__iexact=subcategory)

        data=list(products.values())
        print(data)
        # data=list(Product.objects.values())
        return JsonResponse({"data":data})
    return JsonResponse({"message":"aman jain is goat"})
    
def logout_view(request):
    # print("logout clicked")
    logout(request)
    return JsonResponse({"message":"LOGGED OUT SUCCESSFULLY"})

def check_user(request):
    print("helloaman")
    if request.user.is_authenticated:
        return JsonResponse({
            "is_logged_in":True,
            "name":request.user.first_name
        })
    else:
        print("helloamanjiii")
        return JsonResponse({
            "is_logged_in":False
        })
@csrf_exempt
def postupload(request):
    if(request.method=='POST'):
        content=request.POST.get('content')
        files=request.FILES.getlist('file')
        pos=Posts.objects.create(
            title=content[:10],
            content=content
        )
        for a in files:
            PostImages.objects.create(post=pos,image=a)
        print(files)
        # print("CONTENT:", content)
        # for f in files:
        #     print(f)
        return JsonResponse({"message": "Uploaded successfully"})
    return JsonResponse({"message": "ONLY POST ALLOWED"})

def getposts(request):
    if(request.method=='GET'):
        posts=Posts.objects.order_by("-datetime")
        result=[]
        data=[]
        for post in posts:
            data.append(
                {
                    "id":post.id,
                    "title":post.title,
                    "content":post.content,
                    "datetime":post.datetime,
                    "images":[request.build_absolute_uri(img.image.url)
                              for img in post.images.all()
                              ]
                }
            )
            print(data)
        # data=list(Posts.objects.order_by("datetime").values("id", "title", "content", "datetime"))
        # data1=list(PostImages.objects.order_by("datetime").values())
        return JsonResponse({"data":data})
    return JsonResponse({"data":"Failed"})
