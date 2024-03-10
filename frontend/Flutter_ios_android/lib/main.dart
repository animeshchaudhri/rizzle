import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';

import 'package:provider/provider.dart';
import 'package:rizzle/auth/auth.dart';
import 'package:rizzle/auth/firebaseauth.dart';
import 'package:rizzle/firebase_options.dart';
import 'package:rizzle/pages/homepage.dart';

void main() async {
  await Hive.initFlutter();

  var box = await Hive.openBox('myBox');

  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(
    MyApp(),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Rizzle',
      home: FireBaseAuthPage(),
    );
  }
}
