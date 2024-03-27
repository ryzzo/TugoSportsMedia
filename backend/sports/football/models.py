from typing import Iterable
from django.db import models

from .stats import stat_updater

class Team(models.Model):
    logo = models.ImageField(null=True, blank=True)
    name = models.CharField(max_length=100)
    coach = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class MatchGame(models.Model):
    match_id = models.IntegerField(unique=True)
    home_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='home_team')
    away_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='away_team')
    home_team_scores = models.PositiveIntegerField(default=0)
    away_team_scores = models.PositiveIntegerField(default=0)
    date = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True, blank=True)
    stadium = models.CharField(max_length=100, null=True, blank=True)
    played = models.BooleanField(default=False)

    class Meta:
        ordering = ['-date']

    def save(self, *args, **kwargs):
        matches = MatchGame.objects.filter(played=True)
        # stats = Stat.objects.all()

        stat_updater(matches, Stat)

        super().save(*args, **kwargs)

class Stat(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    matches_played = models.PositiveIntegerField(default=0)
    matches_won = models.PositiveIntegerField(default=0)
    matches_lost = models.PositiveIntegerField(default=0)
    matches_drawn = models.PositiveIntegerField(default=0)
    goals_for = models.PositiveIntegerField(default=0)
    goals_against = models.PositiveIntegerField(default=0)
    goal_difference = models.IntegerField(default=0)
    points = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['-points','-goal_difference','team']

