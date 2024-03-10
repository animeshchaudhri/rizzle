import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:rizzle/auth/auth.dart';
import 'package:rizzle/components/videoplayer.dart';
import 'package:rizzle/pages/homepage.dart';

class FireBaseAuthPage extends StatelessWidget {
  const FireBaseAuthPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: StreamBuilder(
        stream: FirebaseAuth.instance.authStateChanges(),
        builder: (context, snapshot) {
          // user logged in
          if (snapshot.hasData) {
            return MyVideoPlayer();
          }

          // user not logged in

          else {
            return Auth();
          }
        },
      ),
    );
  }
}
