---
title: Slimmer AI
description: Groningen-based AI startup studio where Jan Wilmake worked as a contractor in 2024
category: Organizations
---

# Slimmer AI

![Slimmer AI](https://cdn.prod.website-files.com/62503805f14aa79ac7b3131b/64623d0e77c52f88dabfdb5a_Group-12.svg)

**Slimmer AI** (also styled *Slimmer.ai*) is a Groningen-based AI startup studio that builds B2B software-as-a-service ventures combining AI research with product development. [[Jan_Wilmake]] worked there as a senior contract developer from May to July 2024, embedded in the **ClaimWise** venture.

## Model

Slimmer AI operates as an internal startup accelerator: it finds or generates venture concepts, assembles engineering teams around them, and builds early-stage SaaS products. As the company puts it: *"Slimmer doesn't build for you, but with you."* Engineering staff rotate across ventures rather than being permanently assigned to one product.

The company is backed by institutional investors including **NOM** (Noordelijke OntwikkelingsMaatschappij), the regional Northern Netherlands development fund.

## ClaimWise

During Wilmake's engagement, Slimmer AI's primary active venture was **ClaimWise** — an AI-powered patent search and claim construction platform targeting US patent attorneys and IP managers handling approximately 100 patent applications per year.

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

Application code was written in Python (backend) with Lambda Powertools (FastAPI-compatible) and React (frontend).

### Wilmake's Work

Wilmake's work included ML model deployment UI, frontend and backend feature tickets, data migration pipelines, and claim construction interface improvements.

## Mika

A second Slimmer AI venture active during the same period was **Mika** — an AI-powered tax and accounting advisory tool targeting small German businesses (under 50 employees). Mika aimed to reduce the cost of tax advisor hours by 80% using bank account integration, receipt upload, email invoice parsing, and Slack-based input.

## See Also

- [[Jan_Wilmake]]
- [[Code_From_Anywhere]]
- [[ActionSchema]]
