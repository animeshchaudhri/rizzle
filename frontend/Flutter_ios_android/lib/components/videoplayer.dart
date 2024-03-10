import 'package:flick_video_player/flick_video_player.dart';
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class MyVideoPlayer extends StatefulWidget {
  const MyVideoPlayer({super.key});

  @override
  State<MyVideoPlayer> createState() => _MyVideoPlayerState();
}

class _MyVideoPlayerState extends State<MyVideoPlayer> {
  late FlickManager flickManager;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    flickManager = FlickManager(
      videoPlayerController:
          VideoPlayerController.asset("./assets/story-a.mp4"),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Test"),
      ),
      body: FlickVideoPlayer(
        flickManager: flickManager,
      ),
    );
  }
}
