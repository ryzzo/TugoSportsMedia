from rest_framework import viewsets
from .models import Team, MatchGame, Stat
from .serializer import TeamSerializer, MatchGameSerializer, StatSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class MatchGameViewSet(viewsets.ModelViewSet):
    queryset = MatchGame.objects.all()
    serializer_class = MatchGameSerializer

class StatViewSet(viewsets.ModelViewSet):
    queryset = Stat.objects.all()
    serializer_class = StatSerializer
