const db = require('../config/db.config.js');
const FemalePlayers = db.FemalePlayers;

// Obtener todas las jugadoras
exports.findAll = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        let femalePlayers = await FemalePlayers.findAll({
            attributes: ['id','fifa_version','fifa_update','player_face_url',
                'long_name','player_positions','club_name','nationality_name',
                'overall','potential','value_eur','wage_eur','age','height_cm',
                'weight_kg','preferred_foot','weak_foot','skill_moves',
                'international_reputation','work_rate','body_type','pace',
                'shooting','passing','dribbling','defending','physic',
                'attacking_crossing','attacking_finishing',
                'attacking_heading_accuracy','attacking_short_passing',
                'attacking_volleys','skill_dribbling','skill_curve',
                'skill_fk_accuracy','skill_long_passing','skill_ball_control'
                ,'movement_acceleration','movement_sprint_speed',
                'movement_agility','movement_reactions','movement_balance',
                'power_shot_power','power_jumping','power_stamina',
                'power_strength','power_long_shots','mentality_aggression',
                'mentality_interceptions','mentality_positioning',
                'mentality_vision','mentality_penalties','mentality_composure',
                'defending_marking','defending_standing_tackle',
                'defending_sliding_tackle','goalkeeping_diving',
                'goalkeeping_handling','goalkeeping_kicking',
                'goalkeeping_positioning','goalkeeping_reflexes',
                'goalkeeping_speed','player_traits'],
            order: [['id', 'ASC']],
            offset: offset,
            limit: limit
        })

        if (femalePlayers.length === 0) {
            return res.status(404).send({
                message: "No se encontraron jugadoras."
            });
        } else {
            res.status(200).json(femalePlayers);
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al obtener las jugadoras."
        });
    }
}


