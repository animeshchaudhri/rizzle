import 'package:flutter/material.dart';
import 'package:rizzle/components/bottomnavbar.dart';
import 'package:rizzle/components/button.dart';
import 'package:rizzle/components/text_field.dart';
import 'package:rizzle/components/videocard.dart';
import 'package:rizzle/contants/colorconsts.dart';
import 'package:rizzle/pages/accountpage.dart';
import 'package:rizzle/pages/historypage.dart';
import 'package:rizzle/pages/home.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _selectedIndex = 0;
  void navigateBottomBar(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  // pages
  final List<Widget> _pages = <Widget>[
    Home(),
    HistoryPage(),
    AccountPage(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: backgroundColor,
      bottomNavigationBar: MyBottomNavBar(
        onTabChange: (index) => navigateBottomBar(index),
      ),
      body: _pages[_selectedIndex],
    );
  }
}
