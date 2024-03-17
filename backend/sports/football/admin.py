from django.contrib import admin
from .models import Team, MatchGame, Stat

@admin.register(Team)
class TeamsAdmin(admin.ModelAdmin):
    list_display = ('name', 'coach')

@admin.register(MatchGame)
class MatchesAdmin(admin.ModelAdmin):
    list_display = ('home_team', 'home_team_scores',
                    'away_team', 'away_team_scores',
                    'date', 'time', 'stadium')
    list_filter = ('date', 'time')

@admin.register(Stat)
class StatsAdmin(admin.ModelAdmin):
    list_display = ('team', 'matches_played',
                    'matches_won', 'matches_lost',
                    'matches_drawn')