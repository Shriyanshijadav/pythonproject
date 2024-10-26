from django.db import models


class Contactus(models.Model):
    name= models.CharField(max_length=50)
    email= models.EmailField()
    message= models.CharField(max_length=1000)

    def register(self):
        self.save()