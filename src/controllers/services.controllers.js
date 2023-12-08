import Service from "../models/service";
import { STATUS } from '../constants/index'

//PARA TODOS LOS SERVICIOS
const showServices = async (req, res) => {
  try {
    const servicesList = await Service.find();
    res.status(STATUS.OK).json(servicesList);
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error loading services" });
  }
};

const createService = async (req, res) => {
  console.log('desde crear servicio');
  const {
    nameService,
    nameTeacher,
    date,
    time,
    image,
    planType,
    description,
    price,
  } = req.body;

  try {
    const newService = new Service({
      nameService,
      nameTeacher,
      date,
      time,
      image,
      planType,
      description,
      price,
    });

    await newService.save();
    res.status(STATUS.CREATED).json({ message: "Service created successfully" });
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "Error creating service" });
  }
};

// PARA UN SOLO SERVICIO
const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const oneService = await Service.findById(id);
    res.status(STATUS.OK).json(oneService);
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error when requesting service" });
  }
};

const editService = async (req, res) => {
  const { id } = req.params;
  try {
    await Service.findByIdAndUpdate(id, req.body);
    res.status(STATUS.OK).json({ message: "edited seviece" });
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error when editing service" });
  }
};

const updateService = async (req, res) => {
  const { id } = req.params;
  try {
    await Service.findByIdAndUpdate(id, req.body);
    res.status(STATUS.OK).json({ message: "updated service" });
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error updating service" });
  }
};

const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    await Service.findByIdAndDelete(id);
    res.status(STATUS.OK).json({ message: "removed service" });
  } catch {
    res.status(STATUS.NOT_FOUND).json({ message: "error when deleting service" });
  }
};

export {
  showServices,
  createService,
  getOne,
  editService,
  updateService,
  deleteService
};
