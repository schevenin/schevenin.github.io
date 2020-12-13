package com.schevenin;

public class Apparel {
    private String color, type, description;

    public Apparel(String color, String type, String name) {
        this.color = color.toUpperCase();
        this.type = type.toUpperCase();
        this.description = name;
    }
    public String getColor() {
        return color;
    }
    public boolean setColor(String color) {
        this.color = color.toUpperCase();
        return true;
    }
    public String getType() {
        return type;
    }
    public boolean setType(String type) {
        this.type = type.toUpperCase();
        return true;
    }
    public String getDescription() {
        return description;
    }
    public boolean setDescription(String description) {
        this.description = description;
        return true;
    }
}
