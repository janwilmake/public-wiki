---
title: Screenless
description: AI phone call transcription and GPT integration platform by Jan Wilmake
category: Projects
---

# Screenless

**Screenless** was an AI-powered platform for phone call transcription and GPT integration developed by [[Jan_Wilmake]] under [[Code_From_Anywhere]] in late 2023. The product aimed to create an "ambient" AI interface — one that operated through voice and phone interactions rather than requiring users to engage with a screen, hence the name.

## Concept

Screenless was conceived in October–November 2023, directly inspired by OpenAI's **DevDay** announcements — particularly the release of GPTs (custom ChatGPT configurations). Wilmake identified an opportunity to connect inbound and outbound phone calls to GPT-powered workflows.

The underlying thesis was that voice and telephony remain dominant interfaces for large segments of the population (particularly older users and less tech-literate demographics) and were largely untouched by the 2022–2023 LLM revolution.

## Technical Architecture

- **Transcription**: OpenAI Whisper (real-time and post-call)
- **Language model**: GPT-4 via the OpenAI API
- **Telephony**: VoIP/telephony provider integrations
- **Calendar**: Calendar event creation from transcribed calls
- **WhatsApp**: Follow-up message delivery

## Development History

| Period | Activity |
|--------|----------|
| Oct–Nov 2023 | Concept at OpenAI DevDay; initial prototyping |
| November 2023 | Working with Tolkie (Dutch client) on voice AI |
| December 2023 | Public alpha launched |
| Jan–Feb 2024 | Onboarding improvements; WhatsApp integration; calendar events |
| 2024 | Dual focus maintained alongside [[ActionSchema]] |

## Hardware Vision

In early 2024, Jan published a post arguing against the new-hardware approach taken by competitors like Humane (AI Pin) and Rabbit Tech (R1). His thesis: existing simple phones — specifically cheap Nokia models — paired with quality headphones and an action button already provide all the hardware primitives Screenless needs. The missing piece is software, not silicon.

His proposed stack: a Nokia 105 Neo (~€20) with a good pair of headphones, the action button mapped to call Screenless, and headphone gesture support for the same action. Jan also speculated about using the phone's LED screen as a low-bandwidth signal channel — sending data embedded in the voice signal — but considered this optional.

This position set Screenless apart from contemporaries attempting to manufacture dedicated AI wearables and grounded the product in a pragmatic hardware philosophy: *ultimate AI delivery over a bidirectional voice interface doesn't require new hardware.*

## Social Computing and Chatcasts

A 2023 blog post by Jan outlined the conceptual foundation for Screenless under the framing of **"social computing"**: the thesis that everyday human conversations — in bed, at a bar, on a walk — are the raw material of valuable content, and AI can extract, structure, and publish that material with minimal friction.

Jan coined the term **Chatcasts** for this mode of content production: continuous, conversation-derived media that transcends the traditional scheduled-recording format of podcasts. The enabling technology — transcription + GPT structuring — is exactly what Screenless implements at the call level.

This framing connects Screenless to a broader vision of ambient AI: an always-on system that passively enriches life by capturing what would otherwise be ephemeral.

## See Also

- [[Jan_Wilmake]]
- [[Chat_AI]]
- [[ActionSchema]]
- [[Code_From_Anywhere]]