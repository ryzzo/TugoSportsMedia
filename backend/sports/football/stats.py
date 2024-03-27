
def stat_updater(matches, Stats):
    stats = Stats.objects.all()

    for stat in stats:
        stat.matches_played = 0
        stat.matches_won = 0
        stat. matches_lost = 0
        stat.matches_drawn = 0
        stat.goals_for = 0
        stat.goals_against = 0
        stat.goal_difference = 0
        stat.points = 0
        stat.save()

    for match in matches:
        home_team = match.home_team
        away_team = match.away_team

        obj_home_team = Stats.objects.get(team=home_team)
        obj_away_team = Stats.objects.get(team=away_team)
        
        obj_home_team.matches_played += 1
        obj_away_team.matches_played += 1

        obj_home_team.goals_for += match.home_team_scores
        obj_away_team.goals_for += match.away_team_scores

        obj_home_team.goals_against += match.away_team_scores
        obj_away_team.goals_against += match.home_team_scores

        obj_home_team.goal_difference = obj_home_team.goals_for - obj_home_team.goals_against
        obj_away_team.goal_difference = obj_away_team.goals_for - obj_away_team.goals_against

        if match.home_team_scores > match.away_team_scores:
            obj_home_team.points += 3
            obj_home_team.matches_won += 1

            obj_away_team.matches_lost += 1


        elif match.away_team_scores > match.home_team_scores:
            obj_away_team.points += 3
            obj_away_team.matches_won += 1
            obj_home_team.matches_lost += 1

        else:
            obj_home_team.points += 1
            obj_away_team.points += 1
            obj_home_team.matches_drawn += 1
            obj_away_team.matches_drawn += 1

        obj_home_team.save()
        obj_away_team.save()

