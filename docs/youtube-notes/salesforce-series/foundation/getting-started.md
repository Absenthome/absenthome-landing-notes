---
sidebar_position: 1
title: "Layer 0: Pouring the Foundation"
description: "Setting up your Studio and learning the building blocks of Apex."
---

# Layer 0: Pouring the Foundation

Welcome to **Absenthome: Lessons in Logic and Layers**. This series is designed to take you from a Salesforce Admin to a Systems Architect. We aren't just learning to code; we are learning to build systems that are robust enough to run while you are absent.

:::info The Architect's Mindset
In Layer 0, we move from the Salesforce UI into the Developer's Studio. We are laying the "concrete" that every future trigger and class will sit upon.
:::

---

## 🛠️ Part 1: The Studio Setup (Prerequisites)

Before we can build, we need the right tools in our workshop.

### 1. Visual Studio Code
This is your primary workbench. It’s where you will write, edit, and manage your "blueprints" (code).
* **Download:** [Official VS Code Site](https://code.visualstudio.com/download)

### 2. Node.js
We use Node.js to power the Salesforce CLI. Think of it as the electricity running through your studio.
* **Download:** [Node.js Official Site](https://nodejs.org/en/download/)
* **Check Version:** Open your terminal and run `node --version`.

### 3. Salesforce CLI
This is the "truck" that carries your code from your computer to the Salesforce cloud.
* **Install via NPM:**
  ```bash
  npm install @salesforce/cli --global
  ```

* **Verify Installation:** Run `sf --version` to ensure it's installed correctly.

---

## ☁️ Creating & Connecting Your Org

### 1. Developer Edition Org

You need a safe space to build where you won't break production.

* **Sign Up:** [Free Developer Edition](https://www.salesforce.com/products/free-trial/developer/)
* **Action:** Check your email, reset your password, and save your credentials in a secure location.

### 2. Connecting the Studio

1. Open VS Code.
2. Install the **Salesforce Extension Pack (Expanded)** from the Extensions view (`Ctrl+Shift+X`).
3. Open the **Command Palette** (`Ctrl+Shift+P`).
4. Select **SFDX: Authorize an Org**.
5. Follow the browser prompts to log in. Once successful, your studio is officially connected to the cloud.

---

##  Part 2: Creating Your First Project

Every building needs a project file. In your VS Code terminal, run the following command to generate your workspace:

```bash
sf project generate --name YT-Learning

```

---

##  Part 3: The Building Materials (Variables)

A **Variable** is just a reserved spot in computer memory. If you can build a custom field in the UI, you can write a variable in Apex.

### The Admin-to-Developer Map

| UI Field Type | Apex Data Type | The Architect's Use Case |
| --- | --- | --- |
| **Text / Picklist** | `String` | **The Name Tag.** Used for names or status. |
| **Number** | `Integer` | **The Scoreboard.** Whole counts (1, 2, 3). |
| **Checkbox** | `Boolean` | **The Light Switch.** `true` (on) or `false` (off). |
| **Currency / Percent** | `Decimal` | **The Receipt.** Numbers with a `.` point. |
| **Lookup / ID** | `Id` | **The Passport.** The unique record fingerprint. |
| **Date / Time** | `Date` | **The Calendar.** A specific point in time. |

---

##  Complex Variables (The "Containers")

### 1. The sObject (The Apartment)

In the UI, this is a **Single Record** (like an Account page). In Apex, it’s a container holding all those fields in memory.

* **Example:** `Account myAcc` is like holding the "Edge Communications" record in your hand.

### 2. The List (The Building)

In the UI, this is a **List View**. It’s a collection of records.

* **Why it matters:** Just like checking boxes in a List View for a "Mass Update," a **List** in code lets you process 200+ records at once.

---

##  Part 4: Building the Engine (Logic)

### The Decision Layer: Conditionals (`if/else`)

This is exactly like the **Decision Element** in Flow.

```java
if (doorStatus == 'Open') {
    System.debug('Turn on the light');
} else {
    System.debug('Keep it dark');
}

```

### The Processing Layer: Loops (`for`)

If a variable is a brick, a Loop is the **assembly line**. It allows us to process entire Lists efficiently.

:::tip Jessie's Pro-Tip
"An Admin updates a record. A Developer updates a **List**. We use Loops because we never know if we're dealing with 1 record or 200. Our code must be ready for both."
:::

---

##  Lab: The 20-Account Challenge

Let's build a system that generates data and then adds an "Intelligence Layer" to filter it. Open `scripts/apex/hello.apex` and try this:

```apex title="scripts/apex/hello.apex"
// Step 1: Create a List (The Building)
List<Account> accountList = new List<Account>();

// Step 2: The Construction Layer (Build 10 records)
for (Integer x = 0; x < 10; x++) {
    Account acc = new Account();
    acc.Name = 'Account ' + x;
    acc.NumberOfEmployees = x * 10;
    accountList.add(acc);
    System.debug('Added ' + acc.Name + ' to the list.');
}

// Step 3: The Intelligence Layer (Filter the data)
for(Account a : accountList) {
    if(a.NumberOfEmployees > 50) {
        System.debug('🔥 High Capacity Account: ' + a.Name);
    }
}

```

### 📽️ The Reveal

Notice what happened:

1. We built 10 records in memory.
2. We used logic to find only the ones with > 50 employees.
3. We did it all in milliseconds.

This is the foundation of **Bulkification**. Whether you have 10 records or 10,000, this logic remains the same.

---
Good follow up resources in trailheads. I recommend going through and getting the following Badge.

[Trailheads - Apex Basics for admins](https://trailhead.salesforce.com/content/learn/modules/apex-basics-for-admins/get-started-with-apex)
---

