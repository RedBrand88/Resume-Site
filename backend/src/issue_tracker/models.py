from django.db import models


class Ticket(models.Model):
    SEVERITY_LEVELS = (
        ('N', 'Normal'),
        ('L', 'Low'),
        ('H', 'High'),
        ('U', 'Urgent'),
    )

    STATUS_OPTIONS = (
        ('Open', 'Open'),
        ('Closed', 'Closed'),
    )

    issue = models.CharField(max_length=255)
    severity = models.CharField(max_length=6, choices=SEVERITY_LEVELS)
    assignedTo = models.CharField(max_length=60)
    status = models.CharField(max_length=6, choices=STATUS_OPTIONS)
    description = models.TextField()

    def __str__(self):
        return self.issue


class Sprint(models.Model):
    sprint = models.CharField(max_length=255)
    team = models.CharField(max_length=30)
    version = models.CharField(max_length=5)
    tickets = models.ManyToManyField(Ticket)

    def __str__(self):
        return self.sprint
