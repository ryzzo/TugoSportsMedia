from django.urls import include, path
from rest_framework.routers import DefaultRouter

from football.views import TeamViewSet, MatchGameViewSet, StatViewSet

router = DefaultRouter()
router.register(r'teams', TeamViewSet)
router.register(r'match_games', MatchGameViewSet)
router.register(r'stats', StatViewSet)

urlpatterns = [
    path('', include(router.urls))
] 
