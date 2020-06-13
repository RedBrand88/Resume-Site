from django.contrib import admin

from .models import Ticket
from .models import Sprint

admin.site.register(Ticket)
admin.site.register(Sprint)
