from django.contrib import admin
from home.models import *
# Register your models here.

admin.site.register(Product)
admin.site.register(Posts)
admin.site.register(PostImages)
# @admin.register(Posts)
# class PostsAdmin(admin.ModelAdmin):
#     list_display = ("id", "title", "content", "datetime")

# @admin.register(PostImages)
# class PostImagesAdmin(admin.ModelAdmin):
#     list_display = ("id", "post", "image", "datetime")