import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching tasks:', error.message);
      res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    } else {
      console.error('Unexpected error fetching tasks:', error);
      res.status(500).json({ message: 'Unexpected error fetching tasks' });
    }
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, color } = req.body;

  try {
    const task = await prisma.task.create({
      data: { title, color },
    });
    res.status(201).json(task);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error creating task:', error.message);
      res.status(500).json({ message: 'Error creating task', error: error.message });
    } else {
      console.error('Unexpected error creating task:', error);
      res.status(500).json({ message: 'Unexpected error creating task' });
    }
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { title, color, completed },
    });
    res.json(task);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error updating task:', error.message);
      res.status(500).json({ message: 'Error updating task', error: error.message });
    } else {
      console.error('Unexpected error updating task:', error);
      res.status(500).json({ message: 'Unexpected error updating task' });
    }
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error deleting task:', error.message);
      res.status(500).json({ message: 'Error deleting task', error: error.message });
    } else {
      console.error('Unexpected error deleting task:', error);
      res.status(500).json({ message: 'Unexpected error deleting task' });
    }
  }
};
