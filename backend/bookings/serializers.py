from rest_framework import serializers
from .models import Cage, Booking

class CageSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Cage
        fields = ["id", "is_currently_booked", "price_per_hour"]

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Booking
        fields = ["id", "booked_by_user", "cage", "start_time", "end_time", "date_created"]
        read_only_fields = ["id", "booked_by_user", "date_created"]
