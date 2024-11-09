# SR32 Schedule Checker

An automated schedule checker for SR32 badminton courts that sends availability notifications to a Google Chat room. This project uses a cron job to periodically check and notify you of badminton court availability on specified dates and times.

## Features

- Checks SR32 badminton court availability on Tuesdays within the current month.
- Sends notifications to Google Chat with court availability status for specified time slots.
- Easy setup using environment variables for secure data handling.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Google Chat API webhook URL](https://developers.google.com/chat) to receive notifications

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/dante4rt/sr32-schedule-checker.git
cd sr32-schedule-checker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
SPACE_ID=<your-google-chat-space-id>
SPACE_KEY=<your-google-chat-api-key>
SPACE_TOKEN=<your-google-chat-api-token>
SR32_UID=<your-sr32-uid>
```

These values are required to post messages to a specific Google Chat space.

### 4. Configure Schedule and Run Time

The app is set to check availability every minute. Adjust the cron schedule as needed in `index.js`:

```javascript
const job = new cron.CronJob(
  '* * * * *',   // Every minute
  checkScheduleAndNotify,
  null,
  true,
  'Asia/Jakarta'
);
```

## Usage

Run the application with the following command:

```bash
npm start
```

The script will automatically start checking the schedule and posting availability updates to Google Chat.

### Example Message

```text
Badminton court availability for Tuesday, 14-Nov-2024:
✅ 10:00 - 12:00 - Available
❌ 17:00 - 18:00 - Not available
```

## License

This project is licensed under the MIT License.
