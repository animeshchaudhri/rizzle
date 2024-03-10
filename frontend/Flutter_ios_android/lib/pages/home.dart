import 'package:flutter/material.dart';
import 'package:rizzle/components/button.dart';
import 'package:rizzle/components/text_field.dart';
import 'package:rizzle/components/videocard.dart';
import 'package:rizzle/contants/colorconsts.dart';
import 'package:rizzle/pages/accountpage.dart';
import 'package:rizzle/pages/historypage.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    final prompt_controller = TextEditingController();
    return Scaffold(
      backgroundColor: Colors.grey[300],
      appBar: AppBar(
        backgroundColor: accentColor,
        title: Text("Rizzle"),
      ),
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 10.0,
                  vertical: 10.0,
                ),
                child: Column(
                  children: [
                    VideoCard(
                      RizzleTitle: 'Story of a Lion and his Jungle',
                      videouri: "",
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    MyTextField(
                      controller: prompt_controller,
                      hintText: "Enter Your Movie Episode",
                      obscureText: false,
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    MyButton(text: "Generate Rizzle"),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
