---
title: Slimmer AI
description: Groningen-based AI startup studio where Jan Wilmake worked as a contractor in 2024
category: Organizations
---

# Slimmer AI

![Slimmer AI](https://cdn.prod.website-files.com/62503805f14aa79ac7b3131b/64623d0e77c52f88dabfdb5a_Group-12.svg)

**Slimmer AI** (also styled *Slimmer.ai*) is a Groningen-based AI startup studio that builds B2B software-as-a-service ventures combining AI research with product development. [[Jan Wilmake]] worked there as a senior contract developer from May to July 2024, embedded in the **ClaimWise** venture.[^contract]

## Model

Slimmer AI operates as an internal startup accelerator: it finds or generates venture concepts, assembles engineering teams around them, and builds early-stage SaaS products. As the company puts it: *"Slimmer doesn't build for you, but with you."* Engineering staff rotate across ventures rather than being permanently assigned to one product.[^learnings]

The company is backed by institutional investors including **NOM** (Noordelijke OntwikkelingsMaatschappij), the regional Northern Netherlands development fund.[^slimmer-notes]

## ClaimWise

During Wilmake's engagement, Slimmer AI's primary active venture was **ClaimWise** — an AI-powered patent search and claim construction platform targeting US patent attorneys and IP managers handling approximately 100 patent applications per year.[^slimmer-notes]

### Technical Stack

ClaimWise ran on AWS using a microservices architecture:

| Service | Purpose |
|---------|---------|
| AWS Fargate / ECS | Serverless container orchestration |
| AWS SageMaker | Cloud ML model deployment at scale |
| Aurora PostgreSQL | Serverless relational database |
| Pulumi | Infrastructure as code |
| AWS Step Functions | ML workflow orchestration |
| CloudWatch | Logging and monitoring |

Application code was written in Python (backend) with Lambda Powertools (FastAPI-compatible) and React (frontend). Environments: feature → dev → prod.[^hours-notes]

### Team

| Name | Role |
|------|------|
| Milo | Founder / business lead |
| Ali | CTO / technical lead |
| Tijana | Product manager |
| Esra | Frontend engineer |
| Gabrielle | Backend engineer |
| Santhosh | ML engineer |
| Jan Wilmake | Senior contractor |

### Wilmake's Work

Wilmake was contracted at €90/hour under a formal *modelovereenkomst* signed ~25 April 2024, starting 13 May 2024.[^contract] His work included:

- ML model deployment UI buttons
- Frontend and backend feature tickets
- Data migration pipelines
- Claim construction interface improvements[^history]

### Contract End

The engagement ended on **16 July 2024**, earlier than the contract end date of 30 November 2024, after a performance and cultural misalignment. Wilmake documented detailed lessons learned including the importance of team trust, not undermining the official tech lead, and managing the tension between product vision (Milo) and engineering culture (Ali).[^diary-q3]

## Mika

A second Slimmer AI venture Wilmake observed during his time there was **Mika** — an AI-powered tax and accounting advisory tool targeting small German businesses (under 50 employees). Mika aimed to reduce the cost of tax advisor hours by 80% using bank account integration, receipt upload, email invoice parsing, and Slack-based input.[^mika]

## See Also

- [[Jan Wilmake]]
- [[Code From Anywhere]]
- [[ActionSchema]]
- [[Groningen]]

[^contract]: Contract document: `2024/2024-Q2/slimmer-notes/modelovereenkomst Wijnand Karsens - Slimmer AI Labs B.V. 13-5-2024 tm 30-11-2024.pdf`
[^learnings]: Team learnings: `2024/2024-Q2/slimmer-notes/learnings.md`
[^slimmer-notes]: Slimmer day notes: `2024/2024-Q2/slimmer-notes/slimmer-day-notes.md`
[^hours-notes]: AWS services and links: `2024/2024-Q2/slimmer-notes/hours-notes-links.md`
[^history]: Detailed timeline 2024–2025: `history/2024-2025.md`
[^diary-q3]: Personal diary July 2024: `2024/2024-Q3/2024-07-diary.md`
[^mika]: Mika bootcamp notes: `2024/2024-Q2/slimmer-notes/mika.md`
