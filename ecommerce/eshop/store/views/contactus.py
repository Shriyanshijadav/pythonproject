from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth.hashers import check_password
from store.models.contactus import Contactus
from django.views import View
class contactus(View):
    def get(self,request):
        return render(request,'contactus.html')
    def post(self,request):
        postData=request.POST
        name=postData.get('name')
        email=postData.get('email')
        message=postData.get('message')
        value={
            'name':name,
            'email':email,
            'message':message
        }
        error_message=None

        contactus=Contactus(name=name,
                            email=email,
                            message=message)
        if not error_message:
            print(name,email,message)
            contactus.register()
            return render(request,'contactus.html',{'error':'Your message added successfully.'})
        else:
            data={
                'error':error_message,
                'values':value
            }
            return render(request,'contactus.html',data)
