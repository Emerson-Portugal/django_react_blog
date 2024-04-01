import datetime
from django.db import models


# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField()
    date = models.DateField(default=datetime.date.today)


    def __str__(self) -> str:
        return self.title