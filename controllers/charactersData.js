import CharacterData from "../models/characterData.js";

export const getData = async (req, res) => {
  try {
    const characterData = await CharacterData.find();
    res.status(200).json(characterData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
