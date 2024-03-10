import 'package:flutter/material.dart';
import 'package:google_nav_bar/google_nav_bar.dart';

class MyBottomNavBar extends StatelessWidget {
  void Function(int)? onTabChange;
  MyBottomNavBar({super.key, required this.onTabChange});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(25),
      child: GNav(
          color: Colors.grey[400],
          mainAxisAlignment: MainAxisAlignment.center,
          activeColor: Colors.grey[700],
          tabBackgroundColor: Colors.grey.shade300,
          tabBorderRadius: 24,
          tabActiveBorder: Border.all(color: Colors.white),
          tabs: const [
            GButton(
              icon: Icons.home,
              text: 'Home',
            ),
            GButton(
              icon: Icons.history,
              text: 'History',
            ),
            GButton(
              icon: Icons.person,
              text: 'Account',
            )
          ],
          selectedIndex: 0,
          onTabChange: (value) => onTabChange!(value)),
    );
  }
}
