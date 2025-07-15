from django.db import models
from django.conf import settings

# Models
    
# use djangos build in user model which comes with password hashing and auth
# class User(models.Model):
#     username = models.CharField(max_length=30)
#     password = models.CharField(max_length=50)
#     email = models.CharField(max_length=50)
#     first_name = models.CharField(max_length=30)

class Cage(models.Model):
    is_currently_booked = models.BooleanField(default=False)
    price_per_hour = models.DecimalField(decimal_places=2, max_digits=6)

class Booking(models.Model):
    booked_by_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    cage = models.ForeignKey(Cage, on_delete=models.PROTECT)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    date_created = models.DateTimeField(auto_now_add=True)
