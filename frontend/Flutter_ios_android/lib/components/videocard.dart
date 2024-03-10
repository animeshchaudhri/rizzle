import 'package:flutter/material.dart';
import 'package:rizzle/components/videoplayer.dart';
import 'package:video_player/video_player.dart';

class VideoCard extends StatefulWidget {
  final String videouri;
  final String RizzleTitle;
  const VideoCard({
    super.key,
    required this.RizzleTitle,
    required this.videouri,
  });

  @override
  State<VideoCard> createState() => _VideoCardState();
}

class _VideoCardState extends State<VideoCard> {
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(
          horizontal: 8,
          vertical: 8,
        ),
        height: 530,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(8),
        ),
        child: Column(
          children: [
            (widget.videouri != "")
                ? Container(
                    height: 475,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(5),
                      color: Colors.grey[200],
                    ),
                  )
                : Container(
                    height: 475,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(5),
                      color: Colors.grey[200],
                    ),
                    child: Center(
                      child: Icon(
                        Icons.play_arrow,
                        size: 100,
                        color: Colors.grey[500],
                      ),
                    ),
                  ),
            SizedBox(
              height: 10,
            ),
            Row(
              children: [
                Expanded(
                  child: Text(
                    "Rizzle prompt: ${widget.RizzleTitle} ",
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.normal,
                    ),
                  ),
                ),
              ],
            )
          ],
        ));
  }
}
