from issue_tracker.api.views import TicketViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'', TicketViewSet, basename='issue_tracker')
urlpatterns = router.urls
