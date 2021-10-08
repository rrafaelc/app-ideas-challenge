interface DateProps {
  id: string;
  name: string;
  date: string;
}

export default class CountdownTimer {
  private dates: DateProps[] = [];

  constructor() {
    const storage = localStorage.getItem(
      'rrafaelc@app-ideas-challenge-07-CountdownTimer',
    );

    if (storage) {
      const parseStorage: DateProps[] = JSON.parse(storage);
      this.dates = parseStorage;
    }
  }

  create({ name, date }: Omit<DateProps, 'id'>): DateProps {
    const createDate: DateProps = {
      id: `${'_' + Math.random().toString(36).substr(2, 9)}`,
      name: name ? name : `Timer ${Math.random().toString(36).substr(2, 4)}`,
      date,
    };

    if (this.dates.length > 0) {
      const newDate = [...this.dates, createDate];

      localStorage.setItem(
        'rrafaelc@app-ideas-challenge-07-CountdownTimer',
        JSON.stringify(newDate),
      );

      this.dates = newDate;
    } else {
      localStorage.setItem(
        'rrafaelc@app-ideas-challenge-07-CountdownTimer',
        JSON.stringify([createDate]),
      );

      this.dates.push(createDate);
    }

    return createDate;
  }

  get(): DateProps[] {
    return this.dates;
  }

  delete(id: string): void {
    const index = this.dates.findIndex((date) => date.id === id);

    if (index > -1) {
      const updateDates = this.dates.filter((date) => date.id !== id);
      this.dates = updateDates;

      localStorage.setItem(
        'rrafaelc@app-ideas-challenge-07-CountdownTimer',
        JSON.stringify(updateDates),
      );

      return;
    }

    throw new Error('Countdown timer not found');
  }
}
