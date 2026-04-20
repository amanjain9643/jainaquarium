from django.db import models

class Posts(models.Model):
    title=models.CharField(max_length=100)
    content=models.CharField(max_length=3000)
    datetime=models.DateTimeField(auto_now_add=True)
class PostImages(models.Model):
    post=models.ForeignKey(Posts,on_delete=models.CASCADE,related_name="images")
    image=models.FileField(upload_to="post_files/")
    datetime=models.DateTimeField(auto_now_add=True)
class Product(models.Model):
    class Prodtype(models.TextChoices):
        FOOD = "FOOD", "Food"
        FILTER = "FILTER", "Filter"
        OXYGEN_PUMP = "OXYGEN_PUMP", "Oxygen Pump"
        TOYS = "TOYS", "Toys"
        SOBO = "SOBO", "Sobo"
        AQUARIUM="AQUARIUM","aquarium"
        DECORATION="DECORATION","decoration"
        OTHER="OTHER","other"

    class SubCategory(models.TextChoices):
        DRY="DRY","Dry"
        FROZEN="FROZEN","Frozen"
        INTERNAL="INTERNAL","Internal"
        SPONGE="SPONGE","Sponge"
        STONES="STONES","Stones"
        TOYS="TOYS","Toys"
        CANISTER="CANISTER","Canister"
        HANGON="HANGON","hangon"
        SUMP="SUMP","sump"
        WALLPAPER="WALLPAPER","wallpaper"
        ARTIFICIALPLANTS="ARTIFICIALPLANTS","artificalplants"
        OTHER="OTHER","other"
    class BrandName(models.TextChoices):
        Optimum="Optimum","Optimum"
        Toya="Toya","Toya"
        Taiyo="Taiyo","Taiyo"
        Sobo="Sobo","Sobo"
    Name=models.CharField(max_length=100)
    price=models.IntegerField()
    Poductype=models.CharField(max_length=100,choices=Prodtype.choices)
    Brand=models.CharField(max_length=100 ,choices=BrandName.choices)
    SubCtgry=models.CharField(max_length=100 ,choices=SubCategory.choices,blank=True,null=True)
    def __str__(self):
        return self.Name