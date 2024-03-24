from django.db import models

class Team(models.Model):
    name = models.CharField(max_length=100)
    coach = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class MatchGame(models.Model):
    match_id = models.IntegerField(unique=True)
    home_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='home_team')
    away_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='away_team')
    home_team_scores = models.PositiveBigIntegerField(default=0)
    away_team_scores = models.PositiveSmallIntegerField(default=0)
    date = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True, blank=True)
    stadium = models.CharField(max_length=100, null=True, blank=True)
    played = models.BooleanField(default=False)

    class Meta:
        ordering = ['-date']

class Stat(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    matches_played = models.PositiveBigIntegerField(default=0)
    matches_won = models.PositiveBigIntegerField(default=0)
    matches_lost = models.PositiveBigIntegerField(default=0)
    matches_drawn = models.PositiveBigIntegerField(default=0)
