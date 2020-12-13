package com.schevenin;

public class Account {

    private static int accountsOpened = 1;
    private final int ID_NUMBER;

    public Account() {
        ID_NUMBER = accountsOpened++;
    }

    public int getID() {
        return ID_NUMBER;
    }
    public static int getAccountsOpened() {
        return accountsOpened;
    }
}
