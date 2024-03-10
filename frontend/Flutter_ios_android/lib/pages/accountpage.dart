import 'dart:ffi';
import 'dart:math';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:rizzle/auth/firebaseauth.dart';
import 'package:rizzle/components/button.dart';
import 'package:rizzle/contants/colorconsts.dart';

class AccountPage extends StatefulWidget {
  const AccountPage({super.key});

  @override
  State<AccountPage> createState() => _AccountPageState();
}

class _AccountPageState extends State<AccountPage> {
  final FirebaseAuth _auth = FirebaseAuth.instance;

  Future<void> _logOut() async {
    try {
      await _auth.signOut();
      print("User signed out successfully");
    } catch (e) {
      print("Error signing out: $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Account Page"),
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
              Container(
                height: 200,
                width: 200,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(100),
                  color: Colors.grey[200],
                ),
                child: Icon(
                  Icons.person_rounded,
                  color: Colors.grey[500],
                  size: 150,
                ),
              ),
              SizedBox(
                height: 10,
              ),
              Text(
                "Harshit Dalla",
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(
                height: 10,
              ),
              Text("Basic Plan"),
              SizedBox(
                height: 10,
              ),
              Text("Signed in as ${_auth.currentUser!.email}"),
              SizedBox(
                height: 10,
              ),
              Container(
                height: 1,
                color: Colors.grey[800],
              ),
              SizedBox(
                height: 250,
              ),
              MyButton(
                text: "Log Out",
                onTap: () {
                  _logOut();
                },
              )
            ],
          ),
        ),
      )),
    );
  }
}
