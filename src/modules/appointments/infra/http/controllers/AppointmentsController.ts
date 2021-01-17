import CreateAppointmentService from "@modules/appointments/services/CreateAppointmentService";
import { parseISO } from "date-fns";
import { Response } from "express";
import { Request } from "express";
import { container } from "tsyringe";

export default class AppointmentsProvider {
  public async create(request: Request, response:Response): Promise<Response> {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider_id,
    });

    return response.json(appointment);
  }
}
