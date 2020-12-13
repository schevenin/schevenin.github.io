package com.schevenin;

import java.util.*;

public class Wardrobe {
    private final Collection<Apparel> CLOTHES;
    private final Collection<Outfit> OUTFITS;

    Wardrobe() {
        this.CLOTHES = new LinkedList<>();
        this.OUTFITS = new LinkedList<>();
    }
    Wardrobe(Collection<Apparel> c) {
        this.CLOTHES = c;
        this.OUTFITS = new LinkedList<>();
    }
    Wardrobe(Collection<Apparel> c, Collection<Outfit> o) {
        this.CLOTHES = c;
        this.OUTFITS = o;
    }

    public boolean addApparel(Apparel a) {
        CLOTHES.add(a);
        return true;
    }
    public boolean addOutfit(Outfit o) {
        OUTFITS.add(o);
        return true;
    }
    public boolean createOutfit(Apparel head, Apparel torso, Apparel bottoms, Apparel shoes) {
        Outfit outfit = new Outfit(head, torso, bottoms, shoes);
        addOutfit(outfit);
        return true;
    }
    public Outfit createRandomOutfit() {
        Apparel head, torso, bottoms, shoes;

        List<Apparel> headList = new LinkedList<>();
        List<Apparel> torsoList = new LinkedList<>();
        List<Apparel> bottomsList = new LinkedList<>();
        List<Apparel> shoesList = new LinkedList<>();

        for (Apparel a : CLOTHES) {
            if (a.getType().compareTo("HEAD") == 0) {
                headList.add(a);
            }
            if (a.getType().compareTo("TORSO") == 0) {
                torsoList.add(a);
            }
            if (a.getType().compareTo("BOTTOMS") == 0) {
                bottomsList.add(a);
            }
            if (a.getType().compareTo("SHOES") == 0) {
                shoesList.add(a);
            }
        }

        head = headList.get(new Random().nextInt(headList.size()));
        torso = torsoList.get(new Random().nextInt(torsoList.size()));
        bottoms = bottomsList.get(new Random().nextInt(bottomsList.size()));
        shoes = shoesList.get(new Random().nextInt(shoesList.size()));
        Outfit outfit = new Outfit(head, torso, bottoms, shoes);
        addOutfit(outfit);

        return outfit;
    }

    /*
    public Outfit getFavoriteOutfits() {
        List<Outfit> favorites = new FrequencyCount(OUTFITS).head();
        return favorites.get(new Random().nextInt(favorites.size()));
    }
    public Outfit getLeastFavoriteOutfits() {
        List<Outfit> leastFavorites = new FrequencyCount(OUTFITS).tail();
        return leastFavorites.get(new Random().nextInt(leastFavorites.size()));
    }
    */

}
