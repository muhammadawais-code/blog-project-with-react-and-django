from django.db import models

class Post(models.Model):

    title = models.CharField(max_length=100)
    subheading = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="")
    created = models.DateField(auto_now_add=True)
    edited = models.DateField(auto_now=True)

    def __str__(self):
        return self.title