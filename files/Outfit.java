package com.schevenin;

public class Outfit {
    private Apparel head;
    private Apparel torso;
    private Apparel bottoms;
    private Apparel shoes;

    Outfit(Apparel head, Apparel torso, Apparel bottoms, Apparel shoes) {
        this.head = head;
        this.torso = torso;
        this.bottoms = bottoms;
        this.shoes = shoes;
    }

    public boolean setHead(Apparel h) {
        this.head = h;
        return true;
    }
    public Apparel getHead() {
        return head;
    }
    public boolean setTorso(Apparel t) {
        this.torso = t;
        return true;
    }
    public Apparel getTorso() {
        return torso;
    }
    public boolean setBottoms(Apparel b) {
        this.bottoms = b;
        return true;
    }
    public Apparel getBottoms() {
        return bottoms;
    }
    public boolean setShoes(Apparel s) {
        this.shoes = s;
        return true;
    }
    public Apparel getShoes() {
        return shoes;
    }
}
