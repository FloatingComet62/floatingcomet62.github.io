interface LanyardResponse {
  success: boolean;
  data:    Data;
}

interface Data {
  spotify:                   Spotify;
  listening_to_spotify:      boolean;
  kv:                        Kv;
  discord_user:              DiscordUser;
  discord_status:            string;
  activities:                Activity[];
  active_on_discord_web:     boolean;
  active_on_discord_mobile:  boolean;
  active_on_discord_desktop: boolean;
}

interface Activity {
  type:        number;
  state:       string;
  name:        string;
  id:          string;
  emoji?:      Emoji;
  created_at:  number;
  timestamps?: Timestamps;
  sync_id?:    string;
  session_id?: string;
  party?:      Party;
  flags?:      number;
  details?:    string;
  assets?:     Assets;
}

interface Assets {
  large_text:  string;
  large_image: string;
}

interface Emoji {
  name: string;
}

interface Party {
  id: string;
}

interface Timestamps {
  start: number;
  end:   number;
}

interface DiscordUser {
  username:      string;
  public_flags:  number;
  id:            string;
  discriminator: string;
  avatar:        string;
}

interface Kv {
}

interface Spotify {
  track_id:      string;
  timestamps:    Timestamps;
  song:          string;
  artist:        string;
  album_art_url: string;
  album:         string;
}

export default LanyardResponse;