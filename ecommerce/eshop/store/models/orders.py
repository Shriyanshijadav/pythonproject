from django.db import models
from .product import Product
from .customer import Customer
import datetime

STATUS_CHOICES=(
    ('Accepted','Accepted'),
    ('Packed','Packed'),
    ('On The Way','On The Way'),
    ('Delivered','Delivered'),
    ('Cancel','Cancel'),

)

class Order(models.Model):
    product=models.ForeignKey(Product,on_delete=models.CASCADE)
    customer= models.ForeignKey(Customer,on_delete=models.CASCADE)
    quantity=models.IntegerField(default=1)
    price= models.IntegerField(default=1)
    address=models.CharField(max_length=50,default='',blank=True)
    phone= models.CharField(max_length=50,default='',blank=True)
    date= models.DateField(default=datetime.datetime.today)
    status=models.CharField(max_length=50,choices=STATUS_CHOICES)

    def placeOrder(self):
        self.save()

    @staticmethod
    def get_orders_by_customer(customer_id):
        return Order.objects.filter(customer=customer_id).order_by('-date')