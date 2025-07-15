from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from .models import Cage, Booking
from .serializers import CageSerializer, BookingSerializer

class CageViewSet(viewsets.ModelViewSet):
    queryset = Cage.objects.filter(is_currently_booked=False)
    serializer_class = CageSerializer
    permission_classes = [AllowAny]

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        # automatically set the booking.booked_by_user to the logged-in user
        serializer.save(booked_by_user=self.request.user)
