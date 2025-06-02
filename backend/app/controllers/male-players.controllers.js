const e = require("cors");
const db = require("../config/db.config.js");
const MalePlayers = db.MalePlayers;

// Para filtros
const { Op, where } = require("sequelize");

// Obtener todos los jugadores
exports.findAll = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    let malePlayers = await MalePlayers.findAll({
      attributes: [
        "id",
        "fifa_version",
        "fifa_update",
        "player_face_url",
        "long_name",
        "player_positions",
        "club_name",
        "nationality_name",
        "overall",
        "potential",
        "value_eur",
        "wage_eur",
        "age",
        "height_cm",
        "weight_kg",
        "preferred_foot",
        "weak_foot",
        "skill_moves",
        "international_reputation",
        "work_rate",
        "body_type",
        "pace",
        "shooting",
        "passing",
        "dribbling",
        "defending",
        "physic",
        "attacking_crossing",
        "attacking_finishing",
        "attacking_heading_accuracy",
        "attacking_short_passing",
        "attacking_volleys",
        "skill_dribbling",
        "skill_curve",
        "skill_fk_accuracy",
        "skill_long_passing",
        "skill_ball_control",
        "movement_acceleration",
        "movement_sprint_speed",
        "movement_agility",
        "movement_reactions",
        "movement_balance",
        "power_shot_power",
        "power_jumping",
        "power_stamina",
        "power_strength",
        "power_long_shots",
        "mentality_aggression",
        "mentality_interceptions",
        "mentality_positioning",
        "mentality_vision",
        "mentality_penalties",
        "mentality_composure",
        "defending_marking",
        "defending_standing_tackle",
        "defending_sliding_tackle",
        "goalkeeping_diving",
        "goalkeeping_handling",
        "goalkeeping_kicking",
        "goalkeeping_positioning",
        "goalkeeping_reflexes",
        "goalkeeping_speed",
        "player_traits",
      ],
      order: [["id", "ASC"]],
      offset: offset,
      limit: limit,
    });

    if (malePlayers.length === 0) {
      return res.status(404).send({
        message: "No se encontraron jugadores.",
      });
    } else {
      res.status(200).json(malePlayers);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocurrió un error al obtener los jugadores.",
    });
  }
};


// Obtener un jugador por ID
exports.findByPk = async (req, res) => {
  try {
    const id = req.params.id;

    let malePlayer = await MalePlayers.findByPk(id);

    if (malePlayer) {
      res.status(200).json(malePlayer);
    } else {
      res.status(404).send({
        message: `Jugador con ID ${id} no encontrado.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocurrió un error al obtener el jugador.",
    });
  }
};


// Crear un nuevo jugador
exports.create = async (req, res) => {
  try {
    const {
      name,
      nationality,
      shooting,
      passing,
      dribbling,
      defending,
      physic,
    } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "El nombre del jugador es obligatorio.",
      });
    } else if (!nationality) {
      return res.status(400).send({
        message: "La nacionalidad del jugador es obligatoria.",
      });
    } else if (!shooting || !passing || !dribbling || !defending || !physic) {
      return res.status(400).send({
        message: "Los atributos del jugador son obligatorios.",
      });
    }

    const newPlayer = {
      id: 1,
      fifa_version: "15",
      fifa_update: "2",
      player_face_url: "https://cdn.sofifa.net/players/158/023/15_120.png",
      long_name: name,
      player_positions: "ST",
      club_name: "FC Barcelona",
      nationality_name: "Argentina",
      overall: 93,
      potential: 95,
      value_eur: 100500000,
      wage_eur: 550000,
      age: 27,
      height_cm: 169,
      weight_kg: 67,
      preferred_foot: "Left",
      weak_foot: 3,
      skill_moves: 4,
      international_reputation: 5,
      work_rate: "Medium/Low",
      body_type: "Normal (170-)",
      pace: 93,
      shooting: shooting,
      passing: passing,
      dribbling: dribbling,
      defending: defending,
      physic: physic,
      attacking_crossing: 84,
      attacking_finishing: 94,
      attacking_heading_accuracy: 71,
      attacking_short_passing: 89,
      attacking_volleys: 85,
      skill_dribbling: 96,
      skill_curve: 89,
      skill_fk_accuracy: 90,
      skill_long_passing: 76,
      skill_ball_control: 96,
      movement_acceleration: 96,
      movement_sprint_speed: 90,
      movement_agility: 94,
      movement_reactions: 94,
      movement_balance: 95,
      power_shot_power: 80,
      power_jumping: 73,
      power_stamina: 77,
      power_strength: 60,
      power_long_shots: 88,
      mentality_aggression: 48,
      mentality_interceptions: 22,
      mentality_positioning: 92,
      mentality_vision: 90,
      mentality_penalties: 76,
      mentality_composure: 0,
      defending_marking: null,
      defending_standing_tackle: 21,
      defending_sliding_tackle: 20,
      goalkeeping_diving: 6,
      goalkeeping_handling: 11,
      goalkeeping_kicking: 15,
      goalkeeping_positioning: 14,
      goalkeeping_reflexes: 8,
      goalkeeping_speed: 0,
      player_traits:
        "Finesse Shot, Speed Dribbler (AI), One Club Player, Team Player",
    };
  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocurrió un error al crear el jugador.",
    });
  }
};


// Actualizar un jugador
exports.update = async (req, res) => {
  try {
    const {
      id,
      name,
      nationality,
      shooting,
      passing,
      dribbling,
      defending,
      physic,
    } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "El nombre del jugador es obligatorio.",
      });
    } else if (!nationality) {
      return res.status(400).send({
        message: "La nacionalidad del jugador es obligatoria.",
      });
    } else if (!shooting || !passing || !dribbling || !defending || !physic) {
      return res.status(400).send({
        message: "Los atributos del jugador son obligatorios.",
      });
    }

    malePlayerUpdated = await MalePlayers.update(
      {
        long_name: name,
        nationality_name: name,
        shooting: shooting,
        passing: passing,
        dribbling: dribbling,
        defending: defending,
        physic: physic,
      },
      { where: { id: id } }
    );

    if (malePlayerUpdated) {
        res.status(200).send({
          message: "Jugador actualizado correctamente.",
        });
    } else {
        res.status(404).send({
            message: `Jugador con ID ${id} no encontrado.`,
        });
    }

  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocurrió un error al actualizar el jugador.",
    });
  }
};
