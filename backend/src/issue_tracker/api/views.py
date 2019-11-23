from rest_framework.generics import ListAPIView, RetrieveAPIView
from issue_tracker.models import Ticket
from .serializers import TicketSerializer


class TicketListView(ListAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer


class TicketDetailView(RetrieveAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
