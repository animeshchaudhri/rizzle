import 'package:flutter/material.dart';
import 'package:rizzle/components/videocard.dart';
import 'package:rizzle/contants/colorconsts.dart';

class HistoryPage extends StatefulWidget {
  const HistoryPage({super.key});

  @override
  State<HistoryPage> createState() => _HistoryPageState();
}

class _HistoryPageState extends State<HistoryPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[300],
      appBar: AppBar(
        title: Text("History"),
        backgroundColor: accentColor,
      ),
      body: Center(
        child: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.symmetric(
              horizontal: 10.0,
              vertical: 10.0,
            ),
            child: Column(
              children: [
                VideoCard(
                  RizzleTitle: "Courage the cowerdly dog episode",
                  videouri: "",
                ),
                SizedBox(
                  height: 10,
                ),
                VideoCard(
                  RizzleTitle: "bat Man story",
                  videouri: "",
                ),
                SizedBox(
                  height: 10,
                ),
                VideoCard(
                  RizzleTitle: "Horro story",
                  videouri: "",
                ),
                SizedBox(
                  height: 10,
                ),
                VideoCard(
                  RizzleTitle: "Funny story",
                  videouri: "",
                ),
              ], // children
            ),
          ),
        ),
      ),
    );
  }
}
