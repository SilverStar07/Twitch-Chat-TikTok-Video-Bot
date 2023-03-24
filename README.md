# Twitch Chat TikTok Video Bot

This project was created for [this video tutorial on giving your Twitch chat the ability to create your TikToks, YouTube Shorts, and Instagram Reels](). It will explain all of the finer details of how the system works as well as share additional resources. If you have any questions or feedback on how I can make this better or clearer, comment on the video above or [DM me on Twitter](https://twitter.com/SirSilverStar).

If this has helped you, please consider following on the places I make things and say hi!
- [YouTube](https://www.youtube.com/@SirSilverStar) (If you'd like to see how to make your own Twitch bot from scratch, [check out this playlist](https://youtube.com/playlist?list=PLKaXzzk7E_iWKXDe4DQAVx9m-l1yZhEL5)!)
- [Twitch](https://twitch.tv/SirSilverStar)
- [Discord](https://discord.gg/fz5556n)

## How to set up the system for the first time

- Install [NodeJS](https://nodejs.org/en/) (Either the LTS or Current version should be fine)
- Install [Python](https://www.python.org/)
- Install the [Aitum Vertical plugin](https://aitum.tv/) (Scroll down a little on the page to find it)
- After pulling this repo, run the `Install Clip Bot Dependencies.bat` file. This will automatically install all necessary NodeJS and Python packages to make the bot run.
- Fill in config file's attributes found in `src/config.json`
- Open OBS. You will notice a new scene preview next to your normal one as well as panels for vertical scenes and vertical sources.
  - Set up at least one vertical scene with whatever sources you like.
  - Under the vertical scene preview, click the cog and check both **Backtrack Always On** and **Backtrack runs while streaming/recording**.
  - Set the **Save Backtrack Hotkey** to `Alt+Shift+F1` (`Shift+Alt+F1` is also fine)
  - Set the **Backtrack Recording Path** to whatever folder you like
  - (RECOMMENDED) Set **Backtrack Recording Length** to `120 sec`
  - Click OK
  - (OPTIONAL) If you would also like to capture normal horizontal clips:
    - Open the Settings menu on the OBS main window
    - Click Output on the left, then under Recording, check **Enable Replay Buffer**
    - (RECOMMENDED) Under Replay Buffer, set the **Maximum Replay Time** to `120 sec`
    - Click Hotkeys on the left, then under Replay Buffer, set **Save Replay** to `Alt+Shift+F1` (`Shift+Alt+F1` is also fine). OBS will display a warning about shared hotkeys. This is intentional for our purposes, so it's safe to ignore.
    - Click Apply, then OK
    - To begin capturing horizontal clips, click **Start Replay Buffer** under the Start Streaming button

## Running the bot
- Run the `Start Clip Bot.bat` file. A NodeJS command line window will open. Do not close this until you are either done with your stream or you wish to disable the clipping functionality.
- If you are also capturing horizontal clips, click **Start Replay Buffer** in OBS under the Start Streaming button.
- In order to take a clip, use the `!clip` command in your chat. The bot will wait 5 seconds before saving the clip in order to give you a small buffer for editing purposes and to account for stream delay with your chat. **Once the `!clip` command is used, it will not work again for one minute** in order to save your hard drive from being flooded if many people try clipping the same moment at once.
- Once your stream is over or if you would like to disable clipping functionality, close the NodeJS command line window you opened before.

## Known Issue
If you are recording in OBS while running the vertical clip functionality, pausing the recording will cause the audio and video of the vertical clips to become unsynced by up to several minutes. At this time, stopping a recording is fine and does not cause this behavior. Only pausing seems to create this issue. This is likely an Aitum Vertical plugin issue, so further development on their end may resolve the issue.