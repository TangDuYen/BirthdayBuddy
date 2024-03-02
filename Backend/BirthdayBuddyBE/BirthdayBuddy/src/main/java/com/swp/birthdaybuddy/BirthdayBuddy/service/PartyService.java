package com.swp.birthdaybuddy.BirthdayBuddy.service;

import com.swp.birthdaybuddy.BirthdayBuddy.dto.PartyDTO;
import org.springframework.stereotype.Service;

@Service
public interface PartyService {
    List<PartyDTO> getAllParty();

    PartyDTO createParty(PartyDTO partyDTO);
    void deleteParty(Long partyID);
}
