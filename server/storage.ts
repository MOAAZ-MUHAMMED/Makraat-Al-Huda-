import { programs, type Program, type InsertProgram } from "@shared/schema";

export interface IStorage {
  getPrograms(): Promise<Program[]>;
  getProgram(id: number): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;
}

export class MemStorage implements IStorage {
  private programs: Map<number, Program>;
  private currentId: number;

  constructor() {
    this.programs = new Map();
    this.currentId = 1;
  }

  async getPrograms(): Promise<Program[]> {
    return Array.from(this.programs.values());
  }

  async getProgram(id: number): Promise<Program | undefined> {
    return this.programs.get(id);
  }

  async createProgram(program: InsertProgram): Promise<Program> {
    const id = this.currentId++;
    const newProgram = { ...program, id };
    this.programs.set(id, newProgram);
    return newProgram;
  }
}

export const storage = new MemStorage();
