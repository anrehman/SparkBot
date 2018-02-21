# Botkit Samples for Cisco Spark

This community project driven regroups:
- Cisco Spark bot samples built with Howdy.ai Botkit framework, 
- a template to quickly bootstrap your bot project and reuse bot skills,
- an experimental websocket usage example

We suggest you start with the Hello World bot below.

**New to Botkit?**
- read the ["Botkit for CiscoSpark" guide](https://github.com/howdyai/botkit/blob/master/docs/readme-ciscospark.md)
- take the ["Create Conversational Bots with Botkit" learning lab](https://learninglabs.cisco.com/tracks/collab-cloud/spark-apps/collab-spark-botkit/step/1)

**New to Cisco Spark?**
- read the [Starter Guide](https://github.com/ObjectIsAdvantag/hackathon-resources#cisco-spark-starter-guide-chat-calls-meetings) we use at hackathon,
- or go straight to [Spark4Devs](https://developer.ciscospark.com), signin and click [My apps](https://developer.ciscospark.com/apps.html) to create a bot account.

It regroups a set of best practices:
- configuration: pass settings either through environment variables on the command line, or by hardcoding some of them in the `.env` file. Note that env variable are priorized over the `env`file if values are found in both places.
- healthcheck: check if everything is going well by hitting the `ping` endpoint exposed automatically. 
- skills: organize your bot behaviours by placing 'hear commands', 'convos' and 'events' in the [skills directory](template/skills/). The bot comes with a ".commons", "help", "fallback" and "welcome" skills.
