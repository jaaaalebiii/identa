<div align="center">

# 🔐 Identa
### Unified NFC-based Smart Campus SaaS Platform

[![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)](https://identa-nine.vercel.app/)
[![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Backend](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![License](https://img.shields.io/badge/License-Academic-lightgrey?style=for-the-badge)](LICENSE)

<p align="center">
  <b>Canteen Payments</b> • <b>Attendance Management</b> • <b>Library Automation</b>
</p>

[🔗 **Live Demo**](https://identa-nine.vercel.app/)

</div>

---

## 🚀 About Identa

**Identa** is a **Software-as-a-Service (SaaS)** solution designed to modernize campus operations using **NFC-based student identification**. It enables educational institutions to replace fragmented and manual processes with a **single, centralized platform**.

By utilizing NFC-enabled ID cards and a web-based system, Identa integrates critical campus utilities into one seamless experience.

---

## 🎯 The Problem vs. The Solution

| Current Landscape ❌ | The Identa Solution ✅ |
| :--- | :--- |
| **Disconnected Systems:** Cash, manual registers, and standalone software. | **Unified Platform:** A single identity for all campus interactions. |
| **Inefficiency:** Long queues and slow manual data entry. | **Speed:** Tap-and-go transactions and instant logging. |
| **Data Fragmentation:** Student data scattered across multiple ledgers. | **Centralized Data:** Real-time synchronization across all modules. |
| **Proxy Attendance:** Manual roll calls are prone to manipulation. | **Secure Auth:** Physical presence verification via NFC. |

---

## 🧩 Modules

<div align="center">

| 🥪 **Canteen Module** | 🧑‍🏫 **Attendance Module** | 📚 **Library Module** |
| :--- | :--- | :--- |
| **Cashless Transactions**<br>Digital wallet system replacing cash. | **One-Tap Marking**<br>Students tap their card to mark presence. | **Smart Issue/Return**<br>NFC-based tracking of book loans. |
| **Tap-to-Pay**<br>Instant deduction using NFC. | **Time-Bound Validation**<br>Prevents marking outside class hours. | **Student Mapping**<br>Links specific Book IDs to Student UIDs. |
| **Transaction Logging**<br>Detailed history for students/admins. | **Reporting**<br>Automated generation of sheets. | **Due Dates**<br>Automated tracking of return deadlines. |

</div>

---

## 🧰 Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | HTML, CSS, JS hosted on Vercel |
| **Backend** | ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi) | Python-based high-performance API |
| **Database** | ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=flat&logo=sqlite&logoColor=white) | Development (PostgreSQL planned for prod) |
| **Hardware** | ![NFC](https://img.shields.io/badge/NFC-Hardware-blue?style=flat) | USB NFC Reader (UID-based identification) |

---

## 🔐 Security & Privacy

We prioritize student data privacy through a **"Zero-Knowledge Token"** approach:

> 🛡️ **1. No Sensitive Data on Cards** > The NFC card stores *only* a unique identifier (UID). No names, balances, or photos are written to the card.

> 🛡️ **2. Backend Validation** > All logic (checking balance, verifying identity) happens on the server, preventing card cloning exploits.

> 🛡️ **3. Role-Based Access (Planned)** > Strict separation between Admin, Canteen Staff, and Librarian views.

---

## 👥 Team

| Name | Role |
| :--- | :--- |
| **Jalaj** | 🏗️ Product Engineer |
| **Harman** | ⚙️ Backend Engineer |
| **Gauri** | 🎨 Product Designer & Documentation Lead |

---

## 📅 Project Status & Roadmap

**Current Status:** 🟡 **In Active Development** (Backend Implementation & NFC Integration)

- [x] **Project Inception & Architecture Design**
- [x] **Frontend UI/UX Implementation**
- [ ] **Backend API Development (FastAPI)**
- [ ] **NFC Reader Hardware Integration**
- [ ] **Database Migration (SQLite → PostgreSQL)**
- [ ] **Mobile Application** (Future Scope)
- [ ] **ERP Integration** (Future Scope)

---

## 📜 License

This project is developed as part of **Project-Based Learning (PBL)** and is intended for academic use.

<br>

<div align="center">
  <sub>Built with ❤️ by the Identa Team</sub>
</div>
