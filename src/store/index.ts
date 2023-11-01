import { create } from 'zustand';

export interface IClockState {
  ampm: string;
  hours: number;
  minutes: number;
  seconds: number;
  textHours: number;
  textMinutes: number;
}

const initialState: IClockState = {
  ampm: '',
  hours: 0,
  minutes: 0,
  seconds: 0,
  textHours: 0,
  textMinutes: 0,
};

export interface Store extends IClockState {
  updateTimeAction: () => void;
}
export const useStore = create<Store>((set) => ({
  ...initialState,

  updateTimeAction: () => {
    const date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm;
    if (hours >= 12) {
      hours -= 12;
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }
    if (hours === 0) {
      hours = 12;
    }
    set({
      ampm: ampm,
      hours: hh + mm / 12,
      minutes: mm,
      seconds: ss,
      textHours: hours,
      textMinutes: minutes,
    });
  },
}));
