import Service from "../models/service";

//PARA TODOS LOS SERVICIOS
const showServices = async (req, res) => {
  try {
    const servicesList = await Service.find();
    res.status(200).json(servicesList);
  } catch {
    res.status(404).json({ message: "error loading services" });
  }
};

const createService = async (req, res) => {
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
    res.status(201).json({ message: "Service created successfully" });
  } catch {
    res.status(404).json({ message: "Error creating service" });
  }
};

// PARA UN SOLO SERVICIO
const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const oneService = await Service.findById(id);
    res.status(200).json(oneService);
  } catch {
    res.status(404).json({ message: "error when requesting service" });
  }
};

const editService = async (req, res) => {
  const { id } = req.params;
  try {
    await Service.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "edited seviece" });
  } catch {
    res.status(404).json({ message: "error when editing service" });
  }
};

const updateService = async (req, res) => {
  const { id } = req.params;
  try {
    await Service.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "updated service" });
  } catch {
    res.status(404).json({ message: "error updating service" });
  }
};

const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    await Service.findByIdAndDelete(id);
    res.status(200).json({ message: "removed service" });
  } catch {
    res.status(404).json({ message: "error when deleting service" });
  }
};

export default {
  showServices,
  createService,
  getOne,
  editService,
  updateService,
  deleteService,
};
